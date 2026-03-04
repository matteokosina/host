import React from 'react';
import styles from './TimeCommitment.module.css';

export default function TimeCommitment({ data }) {
  // data format: [{ author: 'name', expectedHours: 10, timeSpent: 8 }, ...]
  
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div className={styles.error}>No time commitment data provided</div>;
  }

  const chartType = data.length === 1 ? 'pie' : 'bar';

  return (
    <div className={styles.container}>
      <div className={styles.chart}>
        {chartType === 'pie' ? (
          <PieChart data={data[0]} />
        ) : (
          <BarChart data={data} />
        )}
      </div>
      <div className={styles.legend}>
        {data.map((item, idx) => (
          <div key={idx} className={styles.legendItem}>
            <div className={styles.authorName}>{item.author}</div>
            <div className={styles.stats}>
              <span className={styles.expected}>
                Commitment: {item.expectedHours}h
              </span>
              <span className={styles.spent}>
                Spent: {item.timeSpent}h
              </span>
              <span className={styles.progress}>
                {((item.timeSpent / item.expectedHours) * 100).toFixed(0)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PieChart({ data }) {
  const total = data.expectedHours;
  const spent = data.timeSpent;
  const remaining = Math.max(0, total - spent);
  
  const spentPercent = (spent / total) * 100;
  const remainingPercent = (remaining / total) * 100;
  
  // SVG pie chart
  const spentAngle = (spent / total) * 360;
  const remainingAngle = (remaining / total) * 360;
  
  return (
    <div className={styles.pieContainer}>
      <svg viewBox="0 0 200 200" className={styles.pieChart}>
        <PieSlice 
          percent={spentPercent} 
          offset={0}
          color="#00ffff"
          label={`Spent: ${spentPercent.toFixed(0)}%`}
        />
        <PieSlice 
          percent={remainingPercent} 
          offset={spentPercent}
          color="#1a1a2e"
          label={`Remaining: ${remainingPercent.toFixed(0)}%`}
        />
      </svg>
      <div className={styles.pieText}>
        <div className={styles.pieValue}>{spent}h / {total}h</div>
      </div>
    </div>
  );
}

function PieSlice({ percent, offset, color, label }) {
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;
  const startAngle = (offset / 100) * 360;
  
  return (
    <circle
      cx="100"
      cy="100"
      r={radius}
      fill="none"
      stroke={color}
      strokeWidth="20"
      strokeDasharray={circumference}
      strokeDashoffset={strokeDashoffset}
      transform={`rotate(${startAngle} 100 100)`}
      className={styles.slice}
    />
  );
}

function BarChart({ data }) {
  const maxHours = Math.max(...data.map(d => d.expectedHours));
  
  return (
    <div className={styles.barContainer}>
      {data.map((item, idx) => {
        const spentPercent = (item.timeSpent / item.expectedHours) * 100;
        const expectedWidth = (item.expectedHours / maxHours) * 100;
        const spentWidth = (item.timeSpent / item.expectedHours) * 100;
        
        return (
          <div key={idx} className={styles.barRow}>
            <div className={styles.barLabel}>{item.author}</div>
            <div className={styles.barWrapper}>
              <div 
                className={styles.barExpected}
                style={{ width: `${expectedWidth}%` }}
                title={`Expected: ${item.expectedHours}h`}
              >
                <div 
                  className={styles.barSpent}
                  style={{ width: `${spentWidth}%` }}
                  title={`Spent: ${item.timeSpent}h`}
                />
              </div>
              <div className={styles.barValue}>
                {spentPercent.toFixed(0)}% ({item.timeSpent}h / {item.expectedHours}h)
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
