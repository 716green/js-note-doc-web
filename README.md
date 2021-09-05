# TS Notebook

.......##..######.....##....##..#######..########.########.########...#######...######.
.......##.##....##....###...##.##.....##....##....##.......##.....##.##.....##.##....##
.......##.##..........####..##.##.....##....##....##.......##.....##.##.....##.##......
.......##..######.....##.##.##.##.....##....##....######...##.....##.##.....##.##......
.##....##.......##....##..####.##.....##....##....##.......##.....##.##.....##.##......
.##....##.##....##....##...###.##.....##....##....##.......##.....##.##.....##.##....##
..######...######.....##....##..#######.....##....########.########...#######...######.

> A TypeScript-based documentation notebook and Web-IDE

You can reference variables from between blocks within a notebook

---

# Todo

### High Priority

> Finish migrating Redux state to the Context API

- Copy `context/user-state.tsx` format for cells
  - Consider using a global state for the user and the user data and the cells data
- Add firebase to cell state
  - The bundler can probably continue to use Redux for now

Add support for named workbooks

> Currently the workbooks are limited to 1 per user. Firestore is setup to allow for more.

### Low Priority

- Look into adding HTML into the Markdown (Try it, it does strange things)
- Add the following code as either a default, or a 'quick add' option:
  ```jsx
  import React from 'react';
  import ReactDOM from 'react-dom';
  import 'bulma/css/bulma.css';
  const Code = () => {
    return <div>Hello World</div>;
  };
  ReactDOM.render(<Code />, document.querySelector('#root'));
  ```

# Lerna

## Project Folder

|            |     |              |
| ---------- | --- | ------------ |
| lerna.json |     |              |
|            |     |              |
| packages   | ->  | cli          |
|            |     |              |
|            | ->  | local-api    |
|            |     |              |
|            | ->  | local-client |

# Redux

## Action Creators

|                   |
| ----------------- |
| `updateCell`      |
| `deleteCell`      |
| `insertCellAfter` |
| `moveCell`        |
| `fetchCells`      |
| `Bundles`         |

---

## Redux Store

|         |     |         |                       |                            |
| ------- | --- | ------- | --------------------- | -------------------------- |
|         | ->  | data    | `{[cell Id]: Cell}`   | Array of all cells         |
| Cells   | ->  | loading | `boolean`             | True/False - Fetching Data |
|         | ->  | error   | `string \| null`      | Errors saving cells        |
|         | ->  | order   | `string[]`            | Order of cells             |
|         |     |         |                       |                            |
| Bundles | ->  | data    | `{[cell Id]: Bundle}` | Bundle for each cell       |

```

```

```ascii
   ___ _____   _   _       _      ______
  |_  /  ___| | \ | |     | |     |  _  \
    | \ `--.  |  \| | ___ | |_ ___| | | |___   ___
    | |`--. \ | . ` |/ _ \| __/ _ \ | | / _ \ / __|
/\__/ /\__/ / | |\  | (_) | ||  __/ |/ / (_) | (__
\____/\____/  \_| \_/\___/ \__\___|___/ \___/ \___|


     ██ ███████     ███    ██  ██████  ████████ ███████ ██████   ██████   ██████
     ██ ██          ████   ██ ██    ██    ██    ██      ██   ██ ██    ██ ██
     ██ ███████     ██ ██  ██ ██    ██    ██    █████   ██   ██ ██    ██ ██
██   ██      ██     ██  ██ ██ ██    ██    ██    ██      ██   ██ ██    ██ ██
 █████  ███████     ██   ████  ██████     ██    ███████ ██████   ██████   ██████


     __            __
   /(    /| ) _/_ /  )  _
(_/__)  / |/()/(-/(_/()(


    _____,   _ __           ___
   ( /(     ( /  )   _/_   ( / \
    /  `.    /  / __ /  _   /  /__ _,
  _/_(___)  /  (_(_)(__(/_(/\_/(_)(__
 //
(/


   __  ___    _  _  __  ____  ___  ___    __    __
  (  )/ __)  ( \( )/  \(_  _)(  _)(   \  /  \  / _)
 __)( \__ \   )  (( () ) )(   ) _) ) ) )( () )( (_
(___/ (___/  (_)\_)\__/ (__) (___)(___/  \__/  \__)



      __           __  ___  ___  __   __   __
   | /__`    |\ | /  \  |  |__  |  \ /  \ /  `
\__/ .__/    | \| \__/  |  |___ |__/ \__/ \__,


    __              __
  |(_   |\ | _ |_ _|  \ _  _
__)__)  | \|(_)|_(-|__/(_)(_



.---. .-.   .   .     .      .--.
    |(   )  |\  |    _|_     |   :
    | `-.   | \ | .-. |  .-. |   | .-.  .-.
    ;(   )  |  \|(   )| (.-' |   ;(   )(
`--'  `-'   '   ' `-' `-'`--''--'  `-'  `-'


 __    __   __  _  __ _____ ___ __   __   ___
|_ \ /' _/ |  \| |/__\_   _| __| _\ /__\ / _/
 _\ |`._`. | | ' | \/ || | | _|| v | \/ | \__
/___||___/ |_|\__|\__/ |_| |___|__/ \__/ \__/




       #  #####     #     #                     ######
       # #     #    ##    #  ####  ##### ###### #     #  ####   ####
       # #          # #   # #    #   #   #      #     # #    # #    #
       #  #####     #  #  # #    #   #   #####  #     # #    # #
 #     #       #    #   # # #    #   #   #      #     # #    # #
 #     # #     #    #    ## #    #   #   #      #     # #    # #    #
  #####   #####     #     #  ####    #   ###### ######   ####   ####




```

### npm run build - memory error

`export NODE_OPTIONS=--max_old_space_size=4096`
