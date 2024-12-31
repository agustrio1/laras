import fs from 'fs'
import path from 'path'

const templateDir = path.join(__dirname, '..', 'templates')
const targetDir = process.cwd()


function copyTemplate() {
    const fileToCopy = ['index.html', "app.tsx", "styles.css"]
    fileToCopy.forEach(file => {
        const srcPath = path.join(templateDir, file)
        const destPath = path.join(targetDir, file)
      if (fs.existsSync(destPath)) {
        console.log(`${destPath} already exists. Skipping.`)
      } else {
        fs.copyFileSync(srcPath, destPath)
        console.log(`Copied ${file} to ${targetDir}`)
      }
    })
}

copyTemplate()