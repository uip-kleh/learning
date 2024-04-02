type SupportVesions = {
    [env: number]: boolean;
}

let versions: SupportVesions = {
    102: false,
    103: false,
    104: true,
    // `v105`: false;   // error
}
