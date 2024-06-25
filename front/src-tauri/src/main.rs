// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use window_vibrancy::apply_mica;

fn main() {
    #[cfg(target_os = "windows")]
    apply_mica(&window, Some((18, 18, 18, 125)))
        .expect("Unsupported platform! 'apply_mica' is only supported on Windows");

    tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
