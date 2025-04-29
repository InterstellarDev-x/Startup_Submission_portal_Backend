-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "forms" (
    "Teamid" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "contactEmail" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "SubmittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "forms_pkey" PRIMARY KEY ("Teamid")
);

-- CreateTable
CREATE TABLE "teammember" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "Teamid" INTEGER NOT NULL,

    CONSTRAINT "teammember_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_email_key" ON "admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "forms_contactEmail_key" ON "forms"("contactEmail");

-- AddForeignKey
ALTER TABLE "teammember" ADD CONSTRAINT "teammember_Teamid_fkey" FOREIGN KEY ("Teamid") REFERENCES "forms"("Teamid") ON DELETE RESTRICT ON UPDATE CASCADE;
