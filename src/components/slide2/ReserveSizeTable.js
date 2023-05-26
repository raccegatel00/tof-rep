import './ReserveSizeTable.css';
import {useEffect, useState} from "react";

function ReserveSizeTable() {
    const [data, setData] = useState({
        gbp: '-',
        eur: '-',
        usd: '-'
    });

    useEffect(() => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => response.json())
            .then(result => {
                setData({
                    gbp: result.bpi.GBP.rate_float,
                    eur: result.bpi.EUR.rate_float,
                    usd: result.bpi.USD.rate_float
                })
            })
            .catch(e => console.log(e));
    }, [])

    return (
        <table className="reserve_size_table">
            <thead>
            <tr>
                <td className="title_col">Наименование</td>
                <td>Внутренний<br/>
                    диаметр,<br/>
                    мм
                </td>
                <td>Толщина<br/>
                    стенок,
                    мм
                </td>
                <td>Наружный<br/>
                    диаметр,<br/>
                    мм
                </td>
                <td>Давление<br/>
                    рабочее<br/>
                    (макс), бар
                </td>
                <td>
                    Радиус<br/>
                    изгиба,<br/>
                    мм
                </td>
                <td>
                    Масса<br/>
                    прибл.,<br/>
                    кг/м
                </td>
                <td>
                    Длина<br/>
                    бухты<br/>
                    (мах), м
                </td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="title_col">ALPHA TOF 319 LT DN16 20bar</td>
                <td>16</td>
                <td>5,0</td>
                <td>26</td>
                <td>20</td>
                <td>80</td>
                <td>0,5</td>
                <td>{data.gbp}</td>
            </tr>
            <tr>
                <td className="title_col">ALPHA TOF 319 LT DN19 20bar</td>
                <td>19</td>
                <td>6,0</td>
                <td>26</td>
                <td>30</td>
                <td>90</td>
                <td>0,5</td>
                <td>{data.eur}</td>
            </tr>
            <tr>
                <td className="title_col">ALPHA TOF 319 LT DN25 20bar</td>
                <td>19</td>
                <td>6,0</td>
                <td>26</td>
                <td>40</td>
                <td>100</td>
                <td>0,5</td>
                <td>{data.usd}</td>
            </tr>
            </tbody>
        </table>
    )
}

export default ReserveSizeTable;
