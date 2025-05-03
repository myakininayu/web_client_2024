import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import useExcelStore from "../../dashboardDataStore";

const UploadTab = () => {
  const { setExcelData, clearExcelData, excelData } = useExcelStore();
  const [fileName, setFileName] = useState('');

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (!uploadedFile) return;
  
    clearExcelData();
    setFileName(uploadedFile.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      parseExcel(data);
    };

    reader.readAsArrayBuffer(uploadedFile);
  };

  const parseExcel = (data) => {
    try {
      // Добавляем опцию cellDates для правильного чтения дат из Excel
      const workbook = XLSX.read(data, { 
        type: 'array',
        cellDates: true // Это важно для правильного чтения дат
      });
      
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      
      // Преобразуем в JSON с учетом дат
      const parsedData = XLSX.utils.sheet_to_json(worksheet, {
        header: 1,
        defval: '',
        raw: false // Это нужно для правильного преобразования дат
      });
  
      if (parsedData.length > 0) {
        const headers = parsedData[0];
        const result = [];
        
        for (let i = 1; i < parsedData.length; i++) {
          const row = parsedData[i];
          const obj = {};
          
          headers.forEach((header, index) => {
            // Специальная обработка для столбца с датой
            if (header.toLowerCase() === 'transaction_date' && row[index] instanceof Date) {
              obj[header] = row[index].toISOString(); // Сохраняем как ISO строку
            } else {
              obj[header] = row[index];
            }
          });
          
          result.push(obj);
        }
        setExcelData(result);
      }
    } catch (err) {
      console.error(err);
    } 
  };

  const downloadJson = () => {
    if (!excelData) return;
    
    const dataStr = JSON.stringify(excelData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', fileName.replace('.xlsx', '.json').replace('.xls', '.json'));
    linkElement.click();
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="file"
          accept=".xlsx,.xls"
          onChange={handleFileUpload}
          style={{ display: 'none' }}
          id="file-upload"
        />
        <label htmlFor="file-upload" className="btn btn-primary">
          Выберите XLSX файл
        </label>
        {fileName && (
          <span style={{ marginLeft: '10px' }}>
            Выбранный файл: {fileName}
          </span>
        )}
      </div>
      
      {excelData && (
        <div>
          <h2>Результат парсинга:</h2>
          <div style={{
            marginBottom: '20px',
            maxHeight: '400px',
            overflow: 'auto',
            border: '1px solid #ddd',
            padding: '10px',
            backgroundColor: '#f9f9f9'
          }}>
            <pre>{JSON.stringify(excelData, null, 2)}</pre>
          </div>
          
          <button
            onClick={downloadJson}
            className="btn btn-info"
          >
            Скачать JSON
          </button>
          
          <h3 className="mt-3">Статистика:</h3>
          <p>Количество строк: {excelData.length}</p>
          {excelData.length > 0 && (
            <p>Колонки: {Object.keys(excelData[0]).join(', ')}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadTab;