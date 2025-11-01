import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const API_KEY = "49d7a4c3435caf888bfd50fd3ef76fb2";

const city = "Hyderabad";

export default function App6(){
    const [currentWeather, setCurrentWeather] = useState(null);
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

        Promise.all([
            axios.get(currentWeatherUrl),
            axios.get(forecastUrl),
        ])
        .then(([currentRes, forecastRes]) => {
            setCurrentWeather(currentRes.data);

            const dailyForecasts = forecastRes.data.list.filter(item => 
                item.dt_txt.includes("12:00:00")
            );

            const transformedData = {
                labels: dailyForecasts.map(item => {
                    // Format to just the date (e.g., "Oct 31")
                    const date = new Date(item.dt_txt);
                    return date.toLocaleString('en-US', { month: 'short', day: 'numeric' });
                }),
                datasets: [
                  {
                    label: `Noon temperature forecast for ${city} (°C)`,
                    // --- FIX: Map over the filtered list ---
                    data: dailyForecasts.map(item => item.main.temp),
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                  },
                ],
            };

            setChartData(transformedData);

            setLoading(false);
        })
        .catch(err => {
            console.error("Error fetching weather data:", err);
            setError("Failed to fetch weather data. Check your API key.");
            setLoading(false);
        });
    }, []);

    if (loading) {
      return <div style={{ padding: '20px' }}>Loading all weather data...</div>;
    }

    if (error) {
      return <div style={{ padding: '20px', color: 'red' }}>{error}</div>;
    }

    return(
        <div>
            <div>
                <p>Temperature: {currentWeather.main.temp}</p>
                <p>Temperature: {currentWeather.main.feels_like}</p>
            </div>
            <div style={{ maxWidth: '800px', margin: 'auto' }}>
                <h2 style={{ textAlign: 'center' }}>
                  5-Day Forecast (Graphical Representation)
                </h2>
                {chartData && (
                  <Line data={chartData} />
                )}
              </div>
        </div>
    );
}