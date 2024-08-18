# Dev Tube in React JS

In this mini project, I rewrite my [first ever solo frontend project](https://github.com/oyieroyier/devtube) using:

- [React JS](https://react.dev/)
- [YouTube API](https://developers.google.com/youtube/v3)
- [Piston API](https://piston.readthedocs.io/en/latest/api-v2/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Monaco React Editor](https://www.npmjs.com/package/@monaco-editor/react)
- [Axios](https://axios-http.com/docs/intro), and
- [Mantine](https://mantine.dev/) component library.

![Preview of the Todo App as viewed on a Samsung Galaxy Fold 2 phone.](./public/readme/devtube-react.png)

### Notes:

1. **Feel free to fork your copy of this repo at any point and play around with it. The MVP is done. :)**

2. I have currently limited search results to just **ONE** because of YouTube API quotas. If you want to increase search results, fork the repository, generate your own API Key from the [Google Cloud Console](https://console.cloud.google.com/?project=devtube-371608), use your in the `SearchForm` component, and increase the number of queries by changing `maxResults=1` to any number.

3. If the search results do not work when you test the live link, it means the daily quota of _10,000 Queries per day_ on my YouTube API key has been reached. This quota is reset daily so you could wait or alternatively, generate your own API Key from the [Google Cloud Console](https://console.cloud.google.com/?project=devtube-371608) and replace mine with it in the `SearchForm` component.

## User Story

A user can:

- Search for a YouTube tutorial on the site.
- Watch the tutorial on the site.
- Code and run code on the site using the inbuilt compiler/code editor.

## Supported Languages

- JavaScript(18.15.0)
- TypeScript(5.0.3)
- Python(3.10.0)
- Java(15.0.2)
- C-Sharp(6.12.0)
- PHP(8.2.3)

## System Requirements

- Node 18+
- A browser capable of running JavaScript (Chrome, Firefox, Safari, or Edge)
- Operating System (Windows 10+, MacOS, Linux, etc.)
- A text editor capable of running JavaScript (Visual Studio Code, Vim, Nano, Emacs, Atom, Sublime Text, etc.)
- RAM >= 4GB
- Disk space >= 1GB

## Installation

To use this repo, follow these steps:

### Alternative One

1.  Open the terminal/CLI on your computer.

2.  Clone the repository by running the following command:

        git clone https://github.com/oyieroyier/devtube-react.git

3.  Change directory to the repo folder:

        cd devtube-react

4.  Open it in your Code Editor of choice. If you use VS Code, run the command:

        code .

### Alternative Two

- On the top right corner of this page there is a button labelled `Fork`.

- Click on that button to create a copy of the repository to your own account.

- Follow the process described in `Alternative One` above.

- Remember to replace your username when cloning.

      git clone https://github.com/your-github-username-here/devtube-react.git

- Follow the steps as outlined in Alternative One above.

## Running the application locally

- Open the integrated terminal in your code editor and install the project dependencies:

      npm install

- Once done with the installation, run the development server in your terminal.

      npm run dev

- You should see the notification `Your application running on port 5173 is available.` at the bottom of your editor.
- If using VS Code, click the `Open in Browser` button.
- If using any other editor, copy the link in the terminal and open it on your browser.

      http://localhost:5173/

## Authors

[Bob Oyier](https://github.com/oyieroyier/)

## License

[![License: ICL](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
