from datetime import datetime

def get_day_of_decade_and_century(date_input):
    try:
        # Convert string input to datetime object
        date = datetime.strptime(date_input, '%Y-%m-%d')
    except ValueError:
        print("Invalid date format. Please ensure your date is in 'YYYY-MM-DD' format.")
        return None
    
    # Define the start and end dates for the current decade and century
    start_of_decade = datetime(date.year - (date.year % 10), 1, 1)
    start_of_century = datetime(date.year - (date.year % 100), 1, 1)
    end_of_decade = datetime(date.year + (10 - (date.year % 10)), 1, 1)
    end_of_century = datetime(date.year + (100 - (date.year % 100)), 1, 1)
    
    # Calculate days
    days_in_decade = (end_of_decade - start_of_decade).days
    days_in_century = (end_of_century - start_of_century).days
    day_of_decade = (date - start_of_decade).days + 1
    day_of_century = (date - start_of_century).days + 1
    
    # Calculate remaining days and percentages
    remaining_days_decade = days_in_decade - day_of_decade
    remaining_days_century = days_in_century - day_of_century
    percentage_decade = (day_of_decade / days_in_decade) * 100
    percentage_century = (day_of_century / days_in_century) * 100
    
    return {
        'date': date.strftime('%Y-%m-%d'),
        'day_of_decade': day_of_decade,
        'day_of_century': day_of_century,
        'remaining_days_decade': remaining_days_decade,
        'remaining_days_century': remaining_days_century,
        'percentage_decade': percentage_decade,
        'percentage_century': percentage_century,
    }

# Prompt the user for a date input
print("Please enter a date in the following format: 'YYYY-MM-DD'")
input_date = input("Enter date: ")  # User inputs the date

# Process the input date
day_numbers = get_day_of_decade_and_century(input_date)

if day_numbers:
    # Displaying the result if the date is valid
    print(f"Date: {day_numbers['date']}")
    print(f"Day number of the decade: {day_numbers['day_of_decade']}, Days remaining in the decade: {day_numbers['remaining_days_decade']}, Percentage of the decade that has passed: {day_numbers['percentage_decade']:.2f}%")
    print(f"Day number of the century: {day_numbers['day_of_century']}, Days remaining in the century: {day_numbers['remaining_days_century']}, Percentage of the century that has passed: {day_numbers['percentage_century']:.2f}%")
