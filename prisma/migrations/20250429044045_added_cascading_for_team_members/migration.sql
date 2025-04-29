-- DropForeignKey
ALTER TABLE "teammember" DROP CONSTRAINT "teammember_Teamid_fkey";

-- AddForeignKey
ALTER TABLE "teammember" ADD CONSTRAINT "teammember_Teamid_fkey" FOREIGN KEY ("Teamid") REFERENCES "forms"("Teamid") ON DELETE CASCADE ON UPDATE CASCADE;
