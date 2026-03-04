import React from 'react';
import styles from './TaskList.module.css';

export default function TaskList({ data }) {
  // data format: [{ id: 1, title: 'Task Name', description: 'Description', owner: 'name', status: 'continue|done' }, ...]
  
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div className={styles.error}>No tasks provided</div>;
  }

  const continueTasks = data.filter(t => t.status === 'open');
  const doneTasks = data.filter(t => t.status === 'done');

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        
        {/* Continue Column */}
        <div className={styles.column}>
          <div className={styles.columnHeader}>
            OPEN
            <span className={styles.count}>{continueTasks.length}</span>
          </div>
          <div className={styles.tasks}>
            {continueTasks.map((task) => (
              <div key={task.id} className={styles.card + ' ' + styles.continue}>
                <div className={styles.cardTitle}>{task.title}</div>
                <div className={styles.cardDescription}>{task.description}</div>
                <div className={styles.cardOwner}>{task.owner}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Done Column */}
        <div className={styles.column}>
          <div className={styles.columnHeader}>
            DONE
            <span className={styles.count}>{doneTasks.length}</span>
          </div>
          <div className={styles.tasks}>
            {doneTasks.map((task) => (
              <div key={task.id} className={styles.card + ' ' + styles.done}>
                <div className={styles.cardTitle}>{task.title}</div>
                <div className={styles.cardDescription}>{task.description}</div>
                <div className={styles.cardOwner}>{task.owner}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}