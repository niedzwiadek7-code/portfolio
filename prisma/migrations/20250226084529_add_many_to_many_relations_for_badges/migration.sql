/*
  Warnings:

  - You are about to drop the column `projectId` on the `Badges` table. All the data in the column will be lost.
  - You are about to drop the column `userExperienceId` on the `Badges` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Badges" DROP CONSTRAINT "Badges_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Badges" DROP CONSTRAINT "Badges_userExperienceId_fkey";

-- AlterTable
ALTER TABLE "Badges" DROP COLUMN "projectId",
DROP COLUMN "userExperienceId";

-- CreateTable
CREATE TABLE "ProjectBadge" (
    "id" SERIAL NOT NULL,
    "badgesId" INTEGER,
    "projectId" INTEGER,

    CONSTRAINT "ProjectBadge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserExperienceBadge" (
    "id" SERIAL NOT NULL,
    "badgesId" INTEGER,
    "userExperienceId" INTEGER,

    CONSTRAINT "UserExperienceBadge_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProjectBadge" ADD CONSTRAINT "ProjectBadge_badgesId_fkey" FOREIGN KEY ("badgesId") REFERENCES "Badges"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectBadge" ADD CONSTRAINT "ProjectBadge_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserExperienceBadge" ADD CONSTRAINT "UserExperienceBadge_badgesId_fkey" FOREIGN KEY ("badgesId") REFERENCES "Badges"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserExperienceBadge" ADD CONSTRAINT "UserExperienceBadge_userExperienceId_fkey" FOREIGN KEY ("userExperienceId") REFERENCES "UserExperience"("id") ON DELETE SET NULL ON UPDATE CASCADE;
