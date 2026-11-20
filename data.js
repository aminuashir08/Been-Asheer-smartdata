export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Use POST method"
    });
  }

  const { network, phone, plan, amount } = req.body || {};

  if (!network || !phone || !plan || !amount) {
    return res.status(400).json({
      success: false,
      message: "network, phone, plan and amount are required"
    });
  }

  return res.status(200).json({
    success: true,
    service: "DATA",
    status: "test",
    network,
    phone,
    plan,
    amount,
    message: "Data request received successfully"
  });
}
