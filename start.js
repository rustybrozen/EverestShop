const { exec } = require('child_process');
exec('npm uninstall sharp', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing npm install: ${error}`);
        return;
    }

    exec('npm install sharp --platform=linux --arch=x64', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing npm install: ${error}`);
            return;
        }
        // Run npm install
        exec('npm install', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing npm install: ${error}`);
                return;
            }


            // Run dulieu.js after npm install completes
            exec('node dulieu.js', (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error executing dulieu.js: ${error}`);
                    return;
                }
            

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
