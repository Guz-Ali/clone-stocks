import React, { useState, useEffect } from "react";
import "./Stats.css";
import StatsRow from './StatsRow';
const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "che3a01r01qi6ghjvcqgche3a01r01qi6ghjvcr0"
const finnhubClient = new finnhub.DefaultApi()
const stocksList = ["AAPL", "MSFT", "TSLA", "GOOGL", "XOM", "SHOP", "MSTR"]

function Stats() {

  const [stockData, setStockData] = useState([]);

  async function getStockData() {
    const promises = stocksList.map((stock) => {
      return new Promise((resolve, reject) => {
        finnhubClient.quote(stock, (error, data, response) => {
          if (error){
            reject(error);
          }
          else {
            resolve({ name: stock, quote: data });
          }
      });
      });
    });

    try {
      const tempStockData = await Promise.all(promises);
      setStockData(tempStockData);
    }
    catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getStockData();
  }, []);

  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p>Stocks</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
          </div>
        </div>
        <div className="stats__header">
          <p>Lists</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {stockData.map((stock) => (
              <StatsRow 
                key={stock.name}
                name={stock.name}
                price={stock.quote.o}
                openPrice={stock.quote.c}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
