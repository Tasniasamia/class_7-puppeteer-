-- CreateTable
CREATE TABLE "Page" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "scrapData" TEXT NOT NULL,
    "scraptStatus" TEXT NOT NULL DEFAULT 'PENDING',
    "scrapError" TEXT NOT NULL,
    "parseData" TEXT NOT NULL,
    "parseError" TEXT NOT NULL,
    "parseStatus" TEXT NOT NULL DEFAULT 'PENDING',
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "creatAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Page_url_key" ON "Page"("url");
