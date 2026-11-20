export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  return res.status(200).json({
    success: true,
    service: "BEEN ASHEER SMART DATA API",
    status: "online",
    services: {
      data: true,
      airtime: true,
      electricity: true,
      examPin: true,
      school: true,
      transfer: true
    },
    message: "API is ready"
  });
}
