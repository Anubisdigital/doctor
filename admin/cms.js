// Register the Decap CMS service worker and load the UI
if (typeof window !== 'undefined' && window.NetlifyCms) {
    window.CMS_MANUAL_INIT = true;
    window.NetlifyCms.init({
        config: {
            load_config_file: false,
            backend: {
                name: 'github',
                // The repo and branch will be loaded from config.yml, 
                // but setting a minimal backend here prevents potential issues.
                repo: '<YOUR_GITHUB_USERNAME>/doctor', 
                branch: 'main' 
            }
        }
    });
}
