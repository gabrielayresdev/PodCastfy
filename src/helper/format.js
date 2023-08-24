export default class Format {
  static arrayFromLocalStorage(value) {
    const x = value.split(",");
    return x;
  }

  static timeFormat(time) {
    const secTotal = Math.round(time / 1000);
    const minTotal = Math.floor(secTotal / 60);
    if (minTotal > 60) {
      const hours = Math.floor(minTotal / 60);

      return `${hours}h ${minTotal - hours * 60}min`;
    } else {
      return `${minTotal}min ${secTotal - minTotal * 60}s`;
    }
  }

  static durationFormat(seconds) {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    return `${hours ? String(hours).padStart(2, "0") + ":" : ""}${
      minutes ? String(minutes).padStart(2, "0") : "00"
    }:${String(seconds - minutes * 60).padStart(2, "0")}`;
  }

  static dateFormat(d) {
    const actualDate = new Date();
    const actualYear = actualDate.getFullYear();
    const date = new Date(d);
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const monthNames = [
      "jan",
      "fev",
      "mar",
      "abr",
      "mai",
      "jun",
      "jul",
      "ago",
      "set",
      "out",
      "nov",
      "dez",
    ];
    if (year < actualYear) {
      return `${monthNames[month]}. de ${year}`;
    } else {
      return `${String(day).padStart(2, "0")} de ${monthNames[month]}.`;
    }
  }
}
