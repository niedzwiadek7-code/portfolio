/*
  Warnings:

  - You are about to drop the column `github` on the `SocialMedia` table. All the data in the column will be lost.
  - You are about to drop the column `linkedin` on the `SocialMedia` table. All the data in the column will be lost.
  - You are about to drop the column `mail` on the `SocialMedia` table. All the data in the column will be lost.
  - Added the required column `name` to the `SocialMedia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `SocialMedia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SocialMedia" DROP COLUMN "github",
DROP COLUMN "linkedin",
DROP COLUMN "mail",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;
