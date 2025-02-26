/*
  Warnings:

  - You are about to drop the column `github_links` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Link" ADD COLUMN     "projectId" INTEGER;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "github_links";

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
