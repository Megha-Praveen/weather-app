import './App.css';
import useFetch from './useFetch';

function App() {
  const { data: weather, loading, error } = useFetch("https://api.openweathermap.org/data/2.5/weather?q=kakkanad&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric");

  if (loading) return <p className="text-center text-light">Loading...</p>;
  if (error) return <p className="text-center text-danger">Error: {error}</p>;

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-gradient" style={{ fontFamily: '"Agbalumo", serif' }}>
      {weather && (
        <div className="card shadow-lg text-center p-4" style={{ width: '30rem', background: 'rgba(0, 0, 0, 0.8)', borderRadius: '15px' }}>
          <h1 className="card-title text-light mb-3">🌤️ Today's Weather</h1>
          <h2 className="card-title text-warning mb-4">{weather.name}</h2>
          <div className="card-body" style={{fontFamily:'"Poppins", sans-serif'}}>
            <div className="row g-3">
              <div className="col-6 col-md-4">
                <div className="border rounded bg-dark text-light">
                  <p className="mb-1">🌡️ Temperature</p>
                  <h5>{weather.main.temp}°C</h5>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="border rounded bg-dark text-light">
                  <p className="mb-1">🤔 Feels Like</p>
                  <h5>{weather.main.feels_like}°C</h5>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="border rounded bg-dark text-light">
                  <p className="mb-1">💧 Humidity</p>
                  <h5>{weather.main.humidity}%</h5>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="border rounded bg-dark text-light">
                  <p className="mb-1">🌥️ Weather</p>
                  <h5>{weather.weather[0].description}</h5>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="border rounded bg-dark text-light">
                  <p className="mb-1">🌬️ Wind Speed</p>
                  <h5>{weather.wind.speed} m/s</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;