import React, { useState } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});
  const [selectedOrder, setSelectedOrder] = useState(null);


  const convertOrderVolToCurrency = (orderVol, currency) => {
    if (currency === "USD") {
      return orderVol;
    } else if (currency === "GBP") {
      return orderVol * 0.85;
    } else if (currency === "JPY") {
      return orderVol * 122.85;
    } else {
      return orderVol * 0.95;
    }
  };


  

  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle={mockData.results.length+" Orders"} />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <div id="content">
        <List
            rows={mockData.results}
            orderVolume={(order) => (
              <p>
                Order Volume: {convertOrderVolToCurrency(order.orderVol, currency)}
              </p>
            )}
            orderSubmittedDate={(order) => (
              <p>
                
              </p>
            )}
            searchText={searchText}
            
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

