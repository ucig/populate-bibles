import fs from 'fs'
import fetch, { Response } from 'node-fetch'

export default async function downloadZip(
  url: string,
  downloadPath: string
): Promise<void> {
  try {
    const response: Response = await fetch(url)
    const blob: Blob = await response.blob()
    const buffer = Buffer.from(await blob.arrayBuffer())
    await fs.writeFileSync(downloadPath, buffer)
  } catch (error) {
    throw new Error(`download failed: ${error.message}`)
  }
}
