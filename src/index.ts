import Importer from './data/importer'
import Content from './processing/content'
import Directory from './processing/directory'

async function main(url: string): Promise<void> {
  const outPath = `../${Math.random().toString(36).substring(2)}`
  await Importer.importFolder(url, outPath)
  const bibleInfo = await Content.getInfo(outPath)
  const books = await Content.booksInfo(outPath)
  await Directory.createDirs(books, bibleInfo)
  await Content.populate(outPath, bibleInfo)
}

