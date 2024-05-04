import numpy as np
import matplotlib.pyplot as plt
from scipy.signal import find_peaks
import json

def generate_mock_data(num_points, trend_rate, cycle_rate):
    x = np.arange(num_points)
    trend = np.exp(-trend_rate * x)
    cycle = np.sin(cycle_rate * x)
    noise = np.random.normal(0, 0.1, num_points)
    data = trend * cycle + noise
    return data

def create_custom_windows(num_points, toggle_points):
    window_line = np.zeros(num_points, dtype=int)
    current_value = 0
    for point in toggle_points:
        window_line[point:] = 1 - current_value
        current_value = 1 - current_value
    return window_line

def plot_data(data_temperature, data_moister, marker_line):
    plt.figure(figsize=(10, 6))
    plt.plot(data_temperature, label='Temperature Data')
    plt.plot(data_moister, label='Moister Data')
    
    # Create a secondary y-axis to plot the marker line
    ax2 = plt.gca().twinx()
    ax2.plot(marker_line, 'r-', label='Window Open/Closed', alpha=0.5)  # Plot as a red line
    ax2.set_ylabel('Window State', color='r')
    ax2.set_ylim(-0.1, 1.1)  # Set limits for better visibility
    ax2.tick_params(axis='y', labelcolor='r')

    plt.xlabel('Index')
    plt.ylabel('Value')
    plt.title('Combined Data Plot')
    plt.legend(loc='upper left')
    ax2.legend(loc='upper right')
    plt.savefig('combined_data_plot.png')
    # plt.show()  # Optionally show the plot


def save_data_as_json(data_temperature, data_moister, marker_line):
    data_dict = {
        "temperature_data": data_temperature.tolist(),
        "moister_data": data_moister.tolist(),
        "peaks_troughs": marker_line.tolist()
    }
    with open('data.json', 'w') as json_file:
        json.dump(data_dict, json_file)

def main():
    num_points = 300
    trend_rate = 0.01
    cycle_rate = 0.1
    data_temperature = generate_mock_data(num_points, trend_rate, cycle_rate)

    trend_rate = 0.04
    data_moister = generate_mock_data(num_points, trend_rate, cycle_rate)

    # Define custom toggle points
    toggle_points = [13, 45, 80, 110, 140, 170, 200, 220,255, 270]

    # Use custom windows instead of finding peaks and troughs
    marker_line = create_custom_windows(num_points, toggle_points)

    plot_data(data_temperature, data_moister, marker_line)
    save_data_as_json(data_temperature, data_moister, marker_line)

if __name__ == "__main__":
    main()
