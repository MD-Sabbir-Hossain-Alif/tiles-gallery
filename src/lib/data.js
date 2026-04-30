// Featured Tiles Data Fetching
export const FeaturedTilesData = async () => {
    const res = await fetch("https://tiles-gallery-server-c14v.onrender.com/feature_tiles")
    return res.json()
}

// All Tiles Data Fetching
export const AllTilesData = async () => {
    const res = await fetch("https://tiles-gallery-server-c14v.onrender.com/tiles_data")
    return res.json()
}
