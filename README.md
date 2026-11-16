# ELEC 3 - Node.js

- **Full name:** Jit Lee S. Romero
- **Section:** IV-BSIT C
- **Course:** ELEC 3 - Node.js

Self-paced Node.js activities, organized by set and activity.

## Set 1 Activities

| Activity | Description | Folder |
| --- | --- | --- |
| N1 - Project Setup and Package Management | An npm project with complete package metadata, a regular dependency, a development dependency, and a start script that prints the student's name. | [set1/n1-setup](set1/n1-setup/) |

## How to Run N1

Node.js and npm are required. The project was checked with Node.js **v24.19.0** and npm **11.17.0**.
From the repository root, enter the activity folder and run:

```sh
cd set1/n1-setup
npm install
npm start
```

In Windows PowerShell, `npm.cmd install` and `npm.cmd start` run the same npm commands if `npm.ps1` is blocked by the execution policy.

The output shows the activity title, **Jit Lee S. Romero | IV-BSIT C**, and the current date and time.

## N1 Package Management

The project was initialized using `npm init --yes`, then its name, version, description, main entry point, author, and start script were filled in.

- `npm install dayjs` installs the regular dependency used in `index.js` to format the date and time.
- `npm install --save-dev --save-exact nodemon@3.1.11` installs the development dependency. Nodemon can restart a Node.js program when its files change; it is not needed by this program's `npm start` command.
- `package.json` describes the project and its dependencies. `package-lock.json` records the resolved package versions and is included in the repository.
- The root `.gitignore` excludes `node_modules/`. Run `npm install` after cloning to restore the packages.

Nodemon is pinned to **3.1.11** after the initial installation reported a [minimatch dependency advisory](https://github.com/advisories/GHSA-g3hv-75wg-m249). The final installed dependency tree passed `npm audit` with zero reported vulnerabilities.

## N1 Written Answers

[N1_answers.docx](set1/n1-setup/N1_answers.docx) explains the required package fields and why `node_modules` is not included when submitting the project.

## N1 Screenshots

Pending: capture actual screenshots of:

1. `node -v` and `npm -v` (or `npm.cmd -v` in PowerShell).
2. The finished `package.json`, including `dependencies` and `devDependencies`.
3. The output of `npm start` (or `npm.cmd start` in PowerShell).

Keep the author's name visible in each screenshot, for example by showing the source-file header beside the terminal output.
Save the images in `set1/n1-setup/screenshots/`; they will be linked and displayed here once supplied.
