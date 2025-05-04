import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Stacked = () => {

    const data = [
        {
          "месяц": 'янв',
          "ул. Мира, 16": 4000,
          "пр-к Ленина, 41": 2400,
          amt: 2400,
        },
        {
          "месяц": 'фев',
          "ул. Мира, 16": 3000,
          "пр-к Ленина, 41": 1398,
          amt: 2210,
        },
        {
          "месяц": 'мар',
          "ул. Мира, 16": 2000,
          "пр-к Ленина, 41": 9800,
          amt: 2290,
        },
        {
          "месяц": 'апр',
          "ул. Мира, 16": 2780,
          "пр-к Ленина, 41": 3908,
          amt: 2000,
        },
        {
          "месяц": 'май',
          "ул. Мира, 16": 1890,
          "пр-к Ленина, 41": 4800,
          amt: 2181,
        },
        {
          "месяц": 'июн',
          "ул. Мира, 16": 2390,
          "пр-к Ленина, 41": 3800,
          amt: 2500,
        },
        {
          "месяц": 'июл',
          "ул. Мира, 16": 3490,
          "пр-к Ленина, 41": 4300,
          amt: 2100,
        },
      ];
    return (
      <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="0 10" />
          <XAxis dataKey="месяц" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="ул. Мира, 16" stackId="a" fill="#8884d8" />
          <Bar dataKey="пр-к Ленина, 41" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    );

}

export default Stacked;
