# Numberle Game

A number guessing game inspired by Wordle, where players have 6 attempts to guess a 5-digit number.

## How to Play

1. **Objective**: Guess the 5-digit number in 6 tries or fewer
2. **Feedback**: After each guess, you'll get color-coded feedback:
   - 🟢 **Green**: The digit is correct and in the right position
   - 🟡 **Yellow**: The digit is in the number but in the wrong position
   - ⚫ **Gray**: The digit is not in the number

3. **Rules**:
   - Each guess must be exactly 5 digits (0-9)
   - Digits can repeat (up to 2 instances of any digit)
   - Use the number pad or keyboard to input your guess
   - Press Enter or click the Enter button to submit

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Keyboard Support**: Full keyboard navigation and input
- **Visual Feedback**: Animated tiles and number pad color changes
- **Statistics Tracking**: Tracks games played, won, and streaks
- **Welcome Modal**: Introduces new players to the game
- **End Game Modal**: Shows results and statistics
- **Local Storage**: Saves your progress and statistics

## File Structure

```
NumberleGame/
├── numberle.html          # Main HTML file
├── numberle-script.js     # Game logic and functionality
├── numberle-styles.css    # Styling and animations
├── numberle-logo.svg      # Game logo
└── README.md             # This file
```

## How to Run

1. Simply open `numberle.html` in any modern web browser
2. No server or additional dependencies required
3. The game works offline

## Game Mechanics

### Number Generation
- The secret number is randomly generated
- Each digit can appear up to 2 times maximum
- The algorithm ensures balanced digit distribution

### Feedback System
- **Correct**: Digit matches exactly in position
- **Present**: Digit exists in the number but in wrong position
- **Absent**: Digit is not in the number at all

### Statistics
- Games Played: Total number of games started
- Games Won: Number of successful guesses
- Current Streak: Consecutive wins
- Best Streak: Longest winning streak

## Controls

### Mouse/Touch
- Click number buttons to input digits
- Click Enter to submit guess
- Click Delete (⌫) to remove last digit
- Click replay button (🔄) to restart

### Keyboard
- Number keys (0-9): Input digits
- Enter: Submit guess
- Backspace: Delete last digit

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development

The game is built with vanilla HTML, CSS, and JavaScript:
- No frameworks or libraries required
- Modular code structure
- Responsive CSS Grid and Flexbox
- CSS animations and transitions
- Local storage for data persistence

## License

This project is open source and available under the MIT License.

## Credits

Inspired by Wordle and similar number guessing games. Built with modern web technologies for optimal performance and user experience. 