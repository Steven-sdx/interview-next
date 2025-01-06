// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type CodeT = {
  code: string;
  short_description: string;
  long_description: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<CodeT>>
) {
  res.status(200).json([]);
}
