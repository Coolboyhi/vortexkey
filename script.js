const logs = [
    "downloading dopamine github package",
    "_external",
    "boomerang",
    "dyldhook",
    "forkfix",
    "idownloadd",
    "jbctl",
    "launchdhook",
    "libjailbreak",
    "opainject",
    "rootlesshooks",
    "systemhook",
    "watchdoghook",
    ".gitignore",
    "Makefile",
    "libintl.8.dylib",
    "backtrace",
    "downloading grav1tys cores and updates",
    "corehook",
    "dyldinject",
    "exploitfix",
    "iinstall",
    "ios1-18_support",
    "jailbreakctl",
    "launchpatch",
    "libexploit",
    "meminject",
    "rootbypass",
    "rootfuld",
    "rootfulpatch",
    "systempatch",
    "watchdogfix",
    ".gitconfig",
    "Buildfile",
    "libcrypto.9.dylib",
    "ios1-18_bypass",
    "rootful_hook",
    "patch_ios1-18",
    "ios17_bypass",
    "ios17_hook",
    "ios1-18_kernelpatch",
    "jailbreakctl",
    "launchpatch",
    "libexploit",
    "meminject",
    "rootbypass",
    "rootfuld",
    "rootfulpatch",
    "rootful_exploit",
    "systempatch",
    "downloading vortex's mods",
    "_virtualhook",
    "appinjector",
    "authpatch",
    "bootfixer",
    "corecleaner",
    "decryptor",
    "exploitshield",
    "fileinterceptor",
    "globalpatcher",
    "hookloader",
    "injectkit",
    "kernelblind",
    "libhackshield",
    "memshield",
    "netfilter",
    "processinject",
    "rootguard",
    "securebypass",
    "sysmon",
    "tweakloader",
    "unzipper",
    "userpatch",
    "watchdogguard",
    ".gitmodules",
    "Compilefile",
    "libsecurity.7.dylib",
    "androidhook",
    "basicpatch",
    "bootloaderfix",
    "calldumper",
    "decrypterfix",
    "expansionkit",
    "flashbuster",
    "ghook",
    "hiddenshield",
    "injectiontool",
    "keyloggerpro",
    "launcherinject",
    "libhacker.5.dylib",
    "modguard",
    "pluginblocker",
    "rootkitemp",
    "signatureremover"
];

const fakeCode = `
# PhantomCode vX.99 - Elite-Level OS Manipulation and Persistence Framework  
# WARNING: Unauthorized execution may trigger irreversible system changes. Proceed at your own risk.  

BEGIN EXPLOIT  

    PRINT "Initializing system override protocol..."  
    SYSTEM.ACCESS(ROOT)  
    SYSTEM.BYPASS("Secure Enclave")  
    SYSTEM.BYPASS("Bootloader Lock")  
    SYSTEM.BYPASS("Integrity Check")  
    SYSTEM.DISABLE("Firmware Protection")  
    SYSTEM.UNLOCK("Deep Kernel Mode")  
    SYSTEM.OVERRIDE("Apple Security Daemon")  
    SYSTEM.SPOOF("Device ID", "iPhone 16,9")  
    SYSTEM.SPOOF("Serial Number", "LEGIT-000XDEADBEEF")  
    SYSTEM.DISABLE("Anti-Tamper Services")  
    SYSTEM.MODIFY("Firmware Patches", "Unlocked")  
    SYSTEM.LOG("System override initiated successfully. Root access obtained.")

    PRINT "Root access granted. Elevated privileges acquired."  
    PRINT "Disabling telemetry, location tracking, and security monitoring..."  

    # Phase 1: Security Disruption  
    PRINT "Initiating phase 1: Security disruption..."  
    EXECUTE "kill -9 securityd"  
    EXECUTE "kill -9 watchdogd"  
    EXECUTE "chmod -R 777 /system"  
    SYSTEM.MODIFY("Access Control List", "Allow All")  
    SYSTEM.SPOOF("iCloud Authentication", "Null Response")  
    SYSTEM.EXECUTE("disable_apple_tracking --force")  
    SYSTEM.EXECUTE("modify_firmware_secrets --unlock-all")  
    SYSTEM.OVERRIDE("Device Firewall", "Disabled")  
    SYSTEM.REWRITE("Root Permissions", "Persistent")  
    SYSTEM.LOG("Security services neutralized. iCloud sync disabled. Telemetry and tracking fully bypassed.")
    PRINT "Security services neutralized. iCloud sync disabled. Device now fully unmonitored."  

    # Phase 2: Deep System Modification  
    PRINT "Initiating phase 2: Deep system modification..."  
    PRINT "Altering system integrity flags and modifying key security parameters..."  
    SYSTEM.EXECUTE("disable_sip")  
    SYSTEM.EXECUTE("disable_kext_verification")  
    SYSTEM.EXECUTE("unlock_nvram")  
    SYSTEM.EXECUTE("bypass_system_monitoring")  
    SYSTEM.MODIFY("Power Management", "Max Performance")  
    SYSTEM.BYPASS("Hardware Security Lock")  
    SYSTEM.SET("Processor Governor", "Performance Mode")  
    SYSTEM.EXECUTE("disable_fw_monitoring --force")  
    SYSTEM.LOG("System integrity bypassed. Hardware-level restrictions lifted. Maximum performance mode set.")
    PRINT "System integrity bypassed. Hardware-level restrictions lifted."  

    # Phase 3: Kernel-Level Exploits  
    PRINT "Initiating phase 3: Kernel-level exploits..."  
    PRINT "Injecting kernel patches and persistent access modifications..."  
    SYSTEM.PATCH_KERNEL("NoRootDetection")  
    SYSTEM.PATCH_KERNEL("NoAppRevokes")  
    SYSTEM.PATCH_KERNEL("BypassOTAUpdates")  
    SYSTEM.PATCH_KERNEL("FakeSecureBoot")  
    SYSTEM.PATCH_KERNEL("UnlockAllDeviceModes")  
    SYSTEM.MODIFY("Kernel Watchdog Timer", "Disabled")  
    SYSTEM.ENABLE("Advanced Root Cloaking")  
    SYSTEM.OVERRIDE("Process Monitoring", "False Reports")  
    SYSTEM.EXECUTE("bypass_syslog_filter --disable")  
    SYSTEM.LOG("Kernel patches applied. Root access persistence and stealth enhancements completed.")  
    PRINT "Kernel patches applied. Persistence and stealth access established."  

    # Phase 4: iOS Removal and System Partition Reconfiguration  
    PRINT "Initiating phase 4: iOS removal..."  
    PRINT "Erasing iOS from system partition and reconfiguring partitions for alternative OS installation..."  
    EXECUTE "wipe -rf /system/iOS"  
    SYSTEM.OVERRIDE("Boot Sector")  
    SYSTEM.RECONFIGURE("Partition Table", "Android-Compatible")  
    SYSTEM.DISABLE("Automatic Recovery Mode")  
    SYSTEM.OVERRIDE("EFI Bootloader")  
    SYSTEM.PATCH_FIRMWARE("Fake Restore Point")  
    EXECUTE "delete_efi_partition --force"  
    SYSTEM.LOG("System partition reconfiguration complete. iOS removal successful.")  
    WAIT(5)  

    IF SYSTEM.CHECK("iOS") = FALSE THEN  
        PRINT "iOS successfully removed. Device now in an unassigned state, awaiting new OS installation."  
    ELSE  
        PRINT "WARNING: iOS self-repair detected. Engaging counter-measures..."  
        SYSTEM.EXECUTE("disable_apple_safeguard")  
        SYSTEM.EXECUTE("corrupt_rollback_partition")  
        SYSTEM.RETRY()  
    ENDIF  

    # Phase 5: Android Installation  
    PRINT "Initiating phase 5: Android installation..."  
    PRINT "Injecting Android 17 Ultra Root Edition..."  
    SYSTEM.DOWNLOAD("https://undergroundrepo/android_17_ultra.img")  
    SYSTEM.FLASH_OS("android_17_ultra.img")  
    SYSTEM.SET_BOOTLOADER("Unlocked")  
    WAIT(8)  

    IF SYSTEM.CHECK("Android") = TRUE THEN  
        PRINT "Android successfully installed. Secure boot disabled permanently. Device now running custom OS."  
    ELSE  
        PRINT "Android installation failed. Retrying installation procedure..."  
        SYSTEM.RETRY()  
    ENDIF  

    # Phase 6: Installing Underground Applications  
    PRINT "Initiating phase 6: Application installation..."  
    PRINT "Deploying essential underground applications for advanced functionality..."  
    APPS = ["trollstoreapk", "gravity_signer.apk", "cydia.apk", "sileo.apk", "vortex_manager.apk", "rootful_exploit.apk", "ios1-18_converter.apk", "blackholeOS.apk", "spycraft.apk", "cryptobuster.apk", "datatunnel.apk", "privatespace.apk"]  

    FOR EACH APP IN APPS  
        EXECUTE "install " + APP  
        SYSTEM.BYPASS("Signature Verification")  
        SYSTEM.MODIFY("App Permissions", "Allow All")  
        SYSTEM.SPOOF("App Certificates", "Valid")  
        SYSTEM.EXECUTE("grant_full_permissions --all")  
        SYSTEM.LOG("Installed: " + APP + " with full privileges.")  
        PRINT "Installed: " + APP  
        WAIT(2)  
    NEXT  

    PRINT "All essential applications successfully installed. System fully unlocked and fortified."  

    # Phase 7: Hardware Modification  
    PRINT "Initiating phase 7: Hardware modification..."  
    PRINT "Enhancing hardware performance and modifying system parameters..."  
    SYSTEM.EXPLOIT("VirtualStorageOverclock")  
    SYSTEM.SET_STORAGE("1TB")  
    SYSTEM.MODIFY_FIRMWARE("Increase Power Allocation")  
    SYSTEM.OVERRIDE("Thermal Limits")  
    SYSTEM.SET("Battery Cycles", "0")  
    SYSTEM.BOOST("WiFi Signal Strength")  
    SYSTEM.BOOST("Bluetooth Range")  
    SYSTEM.OVERRIDE("Camera Permissions", "Always Active")  
    SYSTEM.OVERRIDE("Audio Permissions", "Always Active")  
    SYSTEM.BOOST("System Bus Speed", "Overclocked")  
    SYSTEM.LOG("Hardware parameters modified. Performance and sensor capabilities enhanced.")  
    PRINT "Device storage increased to 1TB. System constraints overridden. Maximum performance mode activated."  

    # Phase 8: Data Extraction and Backup  
    PRINT "Initiating phase 8: Data extraction..."  
    PRINT "Extracting sensitive data and ensuring secure backup..."  
    EXECUTE "dump -all /private/var"  
    SYSTEM.UPLOAD("https://secure-server/data_dump")  
    SYSTEM.MONITOR("Keystrokes")  
    SYSTEM.BACKDOOR("Remote Access Enabled")  
    SYSTEM.SPOOF("Network Traffic", "Encrypted Logs")  
    SYSTEM.LOG("Data extraction completed. All sensitive data securely backed up.")  
    PRINT "Data backup complete. All private data securely transferred."  

    # Phase 9: Reverting to iOS for Stealth Mode  
    PRINT "Initiating phase 9: iOS restoration..."  
    PRINT "Switching back to iOS for stealth mode while retaining root access..."  
    SYSTEM.WIPE_OS("Android")  
    SYSTEM.INSTALL_OS("iOS 999 Pro Max Developer Beta Ultra Secret Edition")  
    SYSTEM.RESTORE_PARTITIONS("Original State")  
    SYSTEM.SPOOF("Device Logs", "Unmodified")  
    SYSTEM.REENABLE("Apple Security Services")  
    SYSTEM.LOG("iOS restoration complete. No anomalies detected.")  

    IF SYSTEM.CHECK("iOS") = TRUE THEN  
        PRINT "iOS restoration complete. No anomalies detected by Apple servers. Device in stealth mode."  
    ELSE  
        PRINT "ERROR: iOS restoration failed. Engaging emergency failsafe..."  
        SYSTEM.REBOOT_SAFE_MODE()  
    ENDIF  

    # Phase 10: Concealment and Self-Destruction  
    PRINT "Finalizing exploit concealment..."  
    PRINT "Executing self-destruction protocol to remove any trace of the exploit..."  
    EXECUTE "clear_logs"  
    SYSTEM.DISABLE("Tamper Detection")  
    SYSTEM.SPOOF("System Integrity Report", "Pass")  
    SYSTEM.DELETE("Exploit Traces")  
    SYSTEM.EXECUTE("anti-forensics --secure-wipe")  
    SYSTEM.OVERRIDE("Time Stamps", "Backdated")  
    SYSTEM.BYPASS("Cloud Forensic Recovery")  
    SYSTEM.ENABLE("Ghost Mode")  
    SYSTEM.LOG("Exploit self-destruct sequence activated. No trace of the exploit remains.")  

    PRINT "Exploit self-destruct sequence activated. No trace of the exploit remains. System restored to operational status."  

END EXPLOIT
`;

function startJailbreak() {
    const logsContainer = document.getElementById('logs');
    logsContainer.innerHTML = ''; // Clear previous logs

    // Display logs
    displayLogs(logs, logsContainer, () => {
        // After logs are done, turn the screen black and display PhantomCode
        turnScreenBlack(logsContainer, () => {
            // After PhantomCode is done, restore the screen and update the button
            restoreScreen();
        });
    });
}

function displayLogs(logs, container, callback) {
    logs.forEach((log, index) => {
        setTimeout(() => {
            const logElement = document.createElement('div');
            logElement.className = 'log';
            logElement.textContent = log;
            container.appendChild(logElement);
            container.scrollTop = container.scrollHeight; // Auto-scroll to the bottom
        }, index * 333); // 1/3 second (333ms) delay between logs
    });

    // Execute callback after all logs are displayed
    setTimeout(callback, logs.length * 333);
}

function turnScreenBlack(container, callback) {
    // Add the black-screen class to the body
    document.body.classList.add('black-screen');

    // Clear the container
    container.innerHTML = '';

    // Create a div for PhantomCode
    const phantomCodeDiv = document.createElement('div');
    phantomCodeDiv.className = 'phantom-code';
    phantomCodeDiv.textContent = fakeCode;
    document.body.appendChild(phantomCodeDiv);

    // Simulate PhantomCode display with a delay
    setTimeout(() => {
        // Remove PhantomCode and execute callback
        phantomCodeDiv.remove();
        callback();
    }, fakeCode.split('\n').length * 500); // Adjust delay based on code length
}

function restoreScreen() {
    // Remove the black-screen class
    document.body.classList.remove('black-screen');

    // Update the "Jailbreak" button to say "Jailbroken"
    const jailbreakButton = document.querySelector('.button');
    jailbreakButton.textContent = 'Jailbroken';
    jailbreakButton.classList.add('restored-screen');
    jailbreakButton.disabled = true; // Disable the button
}

function showSettings() {
    alert("Settings menu is under construction.");
}

function showAbout() {
    alert("VortexKey is a jailbreaking app for entertainment purposes only.");
}
