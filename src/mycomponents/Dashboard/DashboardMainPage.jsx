import React, { useState } from 'react';
import useExcelStore from "../../dashboardDataStore";
import UploadTab from './UploadTab';
import ChartTab from './ChartTab';
import 'bootstrap/dist/css/bootstrap.min.css';

const DashboardMainPage = () => {
  const { excelData } = useExcelStore();
  const [activeTab, setActiveTab] = useState('upload');

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1>Парсер XLSX и визуализация данных</h1>
      
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'upload' ? 'active' : ''}`}
            onClick={() => setActiveTab('upload')}
          >
            Загрузка данных
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'chart' ? 'active' : ''}`}
            onClick={() => setActiveTab('chart')}
            disabled={!excelData}
          >
            График данных
          </button>
        </li>
      </ul>

      {activeTab === 'upload' ? <UploadTab /> : <ChartTab />}
    </div>
  );
};

export default DashboardMainPage;