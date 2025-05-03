import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineDataChart = ({ data }) => {
  const prepareChartData = () => {
    if (!data || data.length === 0) return [];

    // 1. Создаем объект для агрегации данных по датам
    const aggregatedData = {};
    
    // 2. Проходим по всем данным и суммируем значения для каждой даты
    data.forEach((item) => {
      const date = item["transaction_date"];
      const value = parseFloat(item["unit_price"]) || 0;
      
      if (date in aggregatedData) {
        aggregatedData[date] += value;
      } else {
        aggregatedData[date] = value;
      }
    });

    // 3. Преобразуем агрегированные данные в массив для графика
    const result = Object.keys(aggregatedData).map(date => ({
      name: date,
      value: aggregatedData[date]
    }));

    // 4. Сортируем по дате (от старых к новым)
    result.sort((a, b) => new Date(a.name) - new Date(b.name));

    return result;
  };

  const chartData = prepareChartData();

  // Функция для форматирования даты в подсказке
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ru-RU');
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="1 0" />
          <XAxis 
            dataKey="name" 
            tickFormatter={formatDate}
          />
          <YAxis />
          <Tooltip 
            labelFormatter={formatDate}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="value" 
            name="Сумма unit_price"
            stroke="#8884d8" 
            activeDot={{ r: 8 }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineDataChart;