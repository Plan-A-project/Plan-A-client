export default function convertLinks(inputString: string) {
  const urlRegex =
    /(^|\s|<br>|<br\/>|<br \/>|&nbsp;)(https?:\/\/\S+?)(?=\s|<br>|<br\/>|<br \/>|&nbsp;|$)/gi;

  return inputString.replace(urlRegex, (match, before, url) => {
    // If 'http' is preceded by '=', leave it as is
    if (before === `"`) {
      return match;
    }

    // Wrap the link with a link tag
    return `${before}<a href="${url}" target="_blank">${url}</a>`;
  });
}
