// Featured Tiles Data Fetching
export const FeaturedTilesData = async () => {
    const res = await fetch("https://tiles-gallery-server-c14v.onrender.com/feature_tiles")
    return res.json()
}
