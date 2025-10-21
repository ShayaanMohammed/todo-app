import React, {useState, useEffect} from "react";
import axios from "axios";
import {Line} from "react-chartjs-2";
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

function Weather(){
    const [current, setCurrent] = useState(null);
    const [historical, setHistorical] = useState([]);

    const API_KEY = "49d7a4c3435caf888bfd50fd3ef76fb2";
    const LAT = 28.6139;
    const LON = 77.209;

    useEffect(() => {
        axios
            .get(
                `http://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=metric&appid=${API_KEY}`
            )
            .then((res) => setCurrent(res.data))
            .catch((err) => console.log(err));
    });
}