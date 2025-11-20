# 🎮 Blink Tac Toe

Blink Tac Toe is a modern twist on classic Tic Tac Toe, featuring emoji-based gameplay, category selection, and a unique “vanishing move” mechanic. Built using **React** and **Tailwind CSS**.

---

## 🚀 Live Demo
Add hosted link here

## 📦 Source Code
Add repository link here

---

## 🧠 About the Game
Blink Tac Toe enhances traditional Tic Tac Toe by introducing emoji categories, random emoji assignment, and a dynamic board where older moves disappear. Each player can have only **3 emojis active** on the grid, making the gameplay strategic and time-based.

---

## 🎯 Features
- 🎨 **Emoji Category Selection** – Each player selects a category (Animals, Food, Sports, etc.).
- 🔄 **Random Emoji per Turn** – A new random emoji from the chosen category is assigned each turn.
- ✨ **Blink Mechanic** – When placing a 4th emoji, the player’s oldest emoji automatically disappears.
- 🚫 **Placement Restriction** – The new emoji cannot be placed on the same cell where the vanished emoji was located.
- 🏆 **Real-Time Win Detection** – Players win by forming 3 of their emojis in a row (horizontal, vertical, diagonal).
- 📱 **Fully Responsive UI** – Built using Tailwind CSS for smooth, modern design.

---

## 🕹️ Game Rules

### 1. Board Structure
- Played on a **3x3 grid**.
- Maximum **6 emojis** on board at any time (3 per player).
- Board starts empty.

### 2. Emoji Categories
Players choose a category before starting:
- Animals: 🐶 🐱 🐵 🐰  
- Food: 🍕 🍟 🍔 🍩  
- Sports: ⚽️ 🏀 🏈 🎾  
- (You can add your own categories.)

Each turn assigns a **random emoji** from the player’s selected category.

### 3. Turn-Based Gameplay
- Player 1 starts.
- Turns alternate between Player 1 and Player 2.
- Players place their assigned emoji on any empty cell.

### 4. Vanishing Rule (Blink)
- A player can have only **3 emojis** on the board.
- On placing the **4th emoji**, their **oldest emoji disappears** automatically.
- The new emoji **cannot** be placed on the vanished cell in the same turn.

### 5. Winning Condition
A player wins by forming 3 of their emojis in a straight line:
- Horizontal  
- Vertical  
- Diagonal  

### 6. No Draw Condition
Draws are impossible because the grid never stays fully filled due to the vanishing mechanic.

---

## 🛠️ Tech Stack
- **React**
- **Tailwind CSS**
- **JavaScript**
- **React Hooks (useState, useEffect)**

---

