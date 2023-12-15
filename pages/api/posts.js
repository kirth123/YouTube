import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("final"); // Replace with your actual database name

        const posts = await db
            .collection("StackOverflowPostsSample") // Replace with your actual collection name
            .find({})
            .sort({ Score: -1 }) // Assuming you want to sort by 'Score'
            .limit(10)
            .toArray();

        res.json(posts);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: e.message });
    }
};
