const { exec } = require('child_process');

// Run dulieu.js
exec('node dulieu.js', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing dulieu.js: ${error}`);
        return;
    }
    console.log(`dulieu.js output: ${stdout}`);
    console.error(`dulieu.js stderr: ${stderr}`);

    // Run app.js after dulieu.js completes
    exec('node app.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing app.js: ${error}`);
            return;
        }
        console.log(`app.js output: ${stdout}`);
        console.error(`app.js stderr: ${stderr}`);
    });
});
