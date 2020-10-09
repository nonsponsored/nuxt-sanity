export default function resolveProductionUrl(document) {
    return `https://testing-preview.netlify.app/post/${document.slug}?preview=true`
}