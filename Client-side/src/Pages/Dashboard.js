import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../apiConfig';
import NavigationBar from '../component/navbar'

const Dashboard = () => {
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios.get(`${API_BASE_URL}/newyork/top-stories`, { headers })
      .then((response) => {
        setTopStories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
<>
    <NavigationBar />

    <div className="dashboard">
      <h1>Top Stories</h1>

      <div className="story-list">
        <div className="story-card-container">
          {topStories.map((story) => (
            <div key={story.title} className="story-card">
              <a href={story.url} target="_blank" rel="noopener noreferrer">
                <div className="card">
                  <img src={story.multimedia[0].url} className="card-img-top" alt={story.title} />
                  <div className="card-body">
                    <h5 className="card-title">{story.title}</h5>
                    <p className="card-text">{story.abstract}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
