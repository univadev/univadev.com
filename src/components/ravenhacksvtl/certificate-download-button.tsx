"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { RavenHacksCertificate } from "@/data/ravenhacksvtl-certificates";

const PDF_WIDTH_POINTS = 792;
const PDF_HEIGHT_POINTS = 612;
const CANVAS_WIDTH = 1100;
const CANVAS_HEIGHT = 850;
const CANVAS_SCALE = 3;
const FONT_DISPLAY =
  '"Space Grotesk", "Google Sans Flex", Arial, sans-serif';
const FONT_BODY = '"Google Sans Flex", Arial, sans-serif';
const FONT_SIGNATURE = '"Brush Script MT", "Segoe Script", cursive';

type DrawTextOptions = {
  fontSize: number;
  fontWeight?: string;
  fontFamily?: string;
  fillStyle?: string;
  align?: CanvasTextAlign;
  baseline?: CanvasTextBaseline;
};

type DetailItem = {
  label: string;
  value: string;
};

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();

    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Unable to load image: ${src}`));
    image.src = src;
  });
}

function applyFont(
  context: CanvasRenderingContext2D,
  {
    fontSize,
    fontWeight = "400",
    fontFamily = FONT_BODY,
  }: DrawTextOptions
) {
  context.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
}

function drawRoundedRect(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  const safeRadius = Math.min(radius, width / 2, height / 2);

  context.beginPath();
  context.moveTo(x + safeRadius, y);
  context.lineTo(x + width - safeRadius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
  context.lineTo(x + width, y + height - safeRadius);
  context.quadraticCurveTo(
    x + width,
    y + height,
    x + width - safeRadius,
    y + height
  );
  context.lineTo(x + safeRadius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - safeRadius);
  context.lineTo(x, y + safeRadius);
  context.quadraticCurveTo(x, y, x + safeRadius, y);
  context.closePath();
}

function drawText(
  context: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  options: DrawTextOptions
) {
  applyFont(context, options);
  context.fillStyle = options.fillStyle ?? "#111827";
  context.textAlign = options.align ?? "left";
  context.textBaseline = options.baseline ?? "alphabetic";
  context.fillText(text, x, y);
}

function wrapText(
  context: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
) {
  const words = text.trim().split(/\s+/);
  const lines: string[] = [];
  let line = "";

  const splitLongWord = (word: string) => {
    const chunks: string[] = [];
    let chunk = "";

    Array.from(word).forEach((character) => {
      const nextChunk = `${chunk}${character}`;

      if (context.measureText(nextChunk).width <= maxWidth || !chunk) {
        chunk = nextChunk;
        return;
      }

      chunks.push(chunk);
      chunk = character;
    });

    if (chunk) {
      chunks.push(chunk);
    }

    return chunks;
  };

  words.forEach((word) => {
    if (context.measureText(word).width > maxWidth) {
      if (line) {
        lines.push(line);
        line = "";
      }

      const chunks = splitLongWord(word);
      lines.push(...chunks.slice(0, -1));
      line = chunks[chunks.length - 1] ?? "";
      return;
    }

    const nextLine = line ? `${line} ${word}` : word;

    if (context.measureText(nextLine).width <= maxWidth || !line) {
      line = nextLine;
      return;
    }

    lines.push(line);
    line = word;
  });

  if (line) {
    lines.push(line);
  }

  return lines;
}

function getWrappedTextFit(
  context: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  maxLines: number,
  options: DrawTextOptions,
  minFontSize: number
) {
  let fontSize = options.fontSize;
  let lines: string[] = [];

  while (fontSize >= minFontSize) {
    applyFont(context, { ...options, fontSize });
    lines = wrapText(context, text, maxWidth);

    if (lines.length <= maxLines) {
      break;
    }

    fontSize -= 1;
  }

  if (lines.length > maxLines) {
    lines = lines.slice(0, maxLines);
    const finalLine = lines[maxLines - 1] ?? "";
    let truncatedLine = finalLine;

    while (
      truncatedLine.length > 0 &&
      context.measureText(`${truncatedLine}...`).width > maxWidth
    ) {
      truncatedLine = truncatedLine.slice(0, -1);
    }

    lines[maxLines - 1] = `${truncatedLine}...`;
  }

  return { fontSize, lines };
}

function drawWrappedText(
  context: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
  options: DrawTextOptions
) {
  applyFont(context, options);
  context.fillStyle = options.fillStyle ?? "#111827";
  context.textAlign = options.align ?? "left";
  context.textBaseline = options.baseline ?? "alphabetic";

  const lines = wrapText(context, text, maxWidth);

  lines.forEach((line, index) => {
    context.fillText(line, x, y + index * lineHeight);
  });

  return y + lines.length * lineHeight;
}

function drawFittedText(
  context: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  options: DrawTextOptions,
  minFontSize: number
) {
  let fontSize = options.fontSize;

  while (fontSize > minFontSize) {
    applyFont(context, { ...options, fontSize });

    if (context.measureText(text).width <= maxWidth) {
      break;
    }

    fontSize -= 2;
  }

  drawText(context, text, x, y, { ...options, fontSize });
}

function drawDetailBox(
  context: CanvasRenderingContext2D,
  item: DetailItem,
  x: number,
  y: number,
  width: number,
  height: number
) {
  context.fillStyle = "#f9fafb";
  drawRoundedRect(context, x, y, width, height, 8);
  context.fill();
  context.strokeStyle = "#e5e7eb";
  context.lineWidth = 2;
  context.stroke();

  drawText(context, item.label.toUpperCase(), x + 22, y + 30, {
    fontSize: 12,
    fontWeight: "700",
    fillStyle: "#ff7f50",
  });

  const valueOptions = {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: FONT_DISPLAY,
    fillStyle: "#111827",
  };
  const valueFit = getWrappedTextFit(
    context,
    item.value,
    width - 44,
    2,
    valueOptions,
    12
  );
  const lineHeight = Math.max(15, valueFit.fontSize + 3);

  applyFont(context, { ...valueOptions, fontSize: valueFit.fontSize });
  context.fillStyle = valueOptions.fillStyle;
  context.textAlign = "left";
  context.textBaseline = "alphabetic";

  valueFit.lines.forEach((line, index) => {
    context.fillText(line, x + 18, y + 58 + index * lineHeight);
  });
}

function dataUrlToBytes(dataUrl: string) {
  const base64 = dataUrl.split(",")[1] ?? "";
  const binary = window.atob(base64);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes;
}

function textToBytes(value: string) {
  return new TextEncoder().encode(value);
}

function concatBytes(chunks: Uint8Array[]) {
  const totalLength = chunks.reduce((length, chunk) => length + chunk.length, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;

  chunks.forEach((chunk) => {
    result.set(chunk, offset);
    offset += chunk.length;
  });

  return result;
}

function buildPdfFromJpeg(jpegBytes: Uint8Array) {
  const chunks: Uint8Array[] = [];
  const offsets: number[] = [];
  let length = 0;

  const appendBytes = (chunk: Uint8Array) => {
    chunks.push(chunk);
    length += chunk.length;
  };

  const appendText = (text: string) => {
    appendBytes(textToBytes(text));
  };

  const addObject = (id: number, body: string) => {
    offsets[id] = length;
    appendText(`${id} 0 obj\n${body}\nendobj\n`);
  };

  const imageObjectId = 5;
  const content = `q\n${PDF_WIDTH_POINTS} 0 0 ${PDF_HEIGHT_POINTS} 0 0 cm\n/Im0 Do\nQ\n`;

  appendText("%PDF-1.4\n%\u00e2\u00e3\u00cf\u00d3\n");
  addObject(1, "<< /Type /Catalog /Pages 2 0 R >>");
  addObject(2, "<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
  addObject(
    3,
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PDF_WIDTH_POINTS} ${PDF_HEIGHT_POINTS}] /Resources << /XObject << /Im0 ${imageObjectId} 0 R >> >> /Contents 4 0 R >>`
  );
  addObject(4, `<< /Length ${content.length} >>\nstream\n${content}endstream`);

  offsets[imageObjectId] = length;
  appendText(
    `${imageObjectId} 0 obj\n<< /Type /XObject /Subtype /Image /Width ${
      CANVAS_WIDTH * CANVAS_SCALE
    } /Height ${
      CANVAS_HEIGHT * CANVAS_SCALE
    } /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${
      jpegBytes.length
    } >>\nstream\n`
  );
  appendBytes(jpegBytes);
  appendText("\nendstream\nendobj\n");

  const xrefOffset = length;
  appendText("xref\n0 6\n0000000000 65535 f \n");

  for (let id = 1; id <= imageObjectId; id += 1) {
    appendText(`${String(offsets[id]).padStart(10, "0")} 00000 n \n`);
  }

  appendText(
    `trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`
  );

  return concatBytes(chunks);
}

function sanitizeFileName(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function renderCertificateCanvas(certificate: RavenHacksCertificate) {
  if ("fonts" in document) {
    await document.fonts.ready;
  }

  const logo = await loadImage("/univadev.svg");

  const canvas = document.createElement("canvas");
  canvas.width = CANVAS_WIDTH * CANVAS_SCALE;
  canvas.height = CANVAS_HEIGHT * CANVAS_SCALE;

  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error("Canvas rendering is not available in this browser.");
  }

  context.scale(CANVAS_SCALE, CANVAS_SCALE);
  context.fillStyle = "#f4f4f5";
  context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  context.fillStyle = "#ffffff";
  drawRoundedRect(context, 38, 38, 1024, 774, 8);
  context.fill();

  context.strokeStyle = "#111827";
  context.lineWidth = 3;
  drawRoundedRect(context, 58, 58, 984, 734, 6);
  context.stroke();

  context.strokeStyle = "#ff7f50";
  context.lineWidth = 8;
  context.beginPath();
  context.moveTo(58, 58);
  context.lineTo(1042, 58);
  context.stroke();

  context.strokeStyle = "#e5e7eb";
  context.lineWidth = 1.5;
  context.beginPath();
  context.moveTo(108, 164);
  context.lineTo(992, 164);
  context.stroke();

  context.drawImage(logo, 108, 92, 58, 58);

  drawText(context, certificate.organizerName.toUpperCase(), 180, 126, {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: FONT_DISPLAY,
    fillStyle: "#111827",
  });

  drawText(context, certificate.eventName, 992, 120, {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: FONT_DISPLAY,
    fillStyle: "#111827",
    align: "right",
  });
  drawText(context, certificate.eventDates, 992, 145, {
    fontSize: 13,
    fillStyle: "#6b7280",
    align: "right",
  });

  drawText(context, "This certificate is presented to", 550, 242, {
    fontSize: 18,
    fillStyle: "#6b7280",
    align: "center",
  });

  drawFittedText(
    context,
    certificate.recipientName,
    550,
    314,
    840,
    {
      fontSize: 62,
      fontWeight: "700",
      fontFamily: FONT_DISPLAY,
      fillStyle: "#111827",
      align: "center",
    },
    36
  );

  context.strokeStyle = "#ff7f50";
  context.lineWidth = 3;
  context.beginPath();
  context.moveTo(335, 344);
  context.lineTo(765, 344);
  context.stroke();

  drawFittedText(
    context,
    certificate.recognition.toUpperCase(),
    550,
    414,
    850,
    {
      fontSize: 32,
      fontWeight: "700",
      fontFamily: FONT_DISPLAY,
      fillStyle: "#ff7f50",
      align: "center",
    },
    22
  );

  drawWrappedText(
    context,
    certificate.achievement,
    550,
    470,
    760,
    30,
    {
      fontSize: 19,
      fillStyle: "#374151",
      align: "center",
    }
  );

  const detailItems: DetailItem[] = [
    { label: "Project", value: certificate.projectName },
    { label: "Team", value: certificate.teamMembers.join(", ") },
    { label: "Issued", value: certificate.issueDate },
    { label: "Certificate ID", value: certificate.certificateId },
  ];

  detailItems.forEach((item, index) => {
    drawDetailBox(context, item, 98 + index * 238, 584, 214, 96);
  });

  context.strokeStyle = "#111827";
  context.lineWidth = 1.5;
  drawText(context, certificate.signerName, 550, 726, {
    fontSize: 36,
    fontWeight: "400",
    fontFamily: FONT_SIGNATURE,
    fillStyle: "#111827",
    align: "center",
  });
  context.beginPath();
  context.moveTo(425, 744);
  context.lineTo(675, 744);
  context.stroke();

  drawText(context, certificate.signerTitle, 550, 774, {
    fontSize: 13,
    fillStyle: "#6b7280",
    align: "center",
  });

  return canvas;
}

async function downloadCertificatePdf(certificate: RavenHacksCertificate) {
  const canvas = await renderCertificateCanvas(certificate);
  const jpegBytes = dataUrlToBytes(canvas.toDataURL("image/jpeg", 0.95));
  const pdfBytes = buildPdfFromJpeg(jpegBytes);
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const downloadUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const fileName = `${sanitizeFileName(certificate.projectName)}-certificate.pdf`;

  link.href = downloadUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(downloadUrl);
}

export function CertificateDownloadButton({
  certificate,
}: {
  certificate: RavenHacksCertificate;
}) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    try {
      setIsGenerating(true);
      await downloadCertificatePdf(certificate);
    } catch (error) {
      console.error(error);
      window.alert("The PDF could not be generated. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button
      type="button"
      size="lg"
      onClick={handleDownload}
      disabled={isGenerating}
      className="h-auto cursor-pointer rounded-lg bg-[#ff7f50] px-6 py-3 text-base font-semibold text-white shadow-md transition-all hover:bg-[#ff6b3d] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
    >
      <Download className="h-5 w-5" />
      {isGenerating ? "Preparing PDF..." : "Download PDF"}
    </Button>
  );
}
