import Tour from "../models/Tour.js";

export const getTourBySearch = async (req, res) => {
  const { title, city, maxGroupSize } = req.query;

  const query = {};

  if (title) {
    query.title = { $regex: new RegExp(title, "i") };
  }

  if (city) {
    query.city = { $regex: new RegExp(city, "i") };
  }

  if (maxGroupSize) {
    query.maxGroupSize = { $gte: parseInt(maxGroupSize) };
  }

  try {
    const tours = await Tour.find(query);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Search results retrieved successfully",
      data: tours,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to search for tours" });
  }
};
