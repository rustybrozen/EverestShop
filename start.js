const { exec } = require('child_process');
exec('npm uninstall sharp', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing npm install: ${error}`);
        return;
    }
    console.log(`npm install output: ${stdout}`);
    console.error(`npm install stderr: ${stderr}`);
    
    exec('npm install sharp --platform=linux --arch=x64', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing npm install: ${error}`);
            return;
        }
        console.log(`npm install output: ${stdout}`);
        console.error(`npm install stderr: ${stderr}`);
        // Run npm install
        exec('npm install', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing npm install: ${error}`);
                return;
            }
            console.log(`npm install output: ${stdout}`);
            console.error(`npm install stderr: ${stderr}`);

            // Run dulieu.js after npm install completes
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
        });
    });
});
