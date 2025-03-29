# Requirements

-   [Node.js 20+](https://nodejs.org/en)
-   [Visual Studio Code](https://code.visualstudio.com/)
-   [Rojo extension](https://rojo.space/docs/v7/getting-started/installation/)
-   Opened place in roblox studio

# Installing guide

1. Clone repository in your folder
    ```
    git clone https://github.com/Kayrit0/telegram-admin.git
    ```
2. Enter in directory
    ```
    cd telegram-admin
    ```
3. Open **bot** directory in VS Code
4. Rename **.example.env** to **.env**
5. Paste your values into **.env**
6. Install packages
    ```
    npm install
    ```
7. Compile typescript
    ```
    npx tsc
    ```
8. Run bot
    ```
    node dist/bot.js
    ```
9. Open **telegram-admin-game** directory in VS Code
10. Start Rojo
    ```
    rojo serve
    ```
11. Connect and sync to rojo in your studio using [plugin](https://create.roblox.com/store/asset/13916111004/Rojo)
12. Publish your game
13. Enjoy!
