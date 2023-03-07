-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_user_profile_id_fkey`;

-- AlterTable
ALTER TABLE `user` MODIFY `password` VARCHAR(191) NULL,
    MODIFY `user_profile_id` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_user_profile_id_fkey` FOREIGN KEY (`user_profile_id`) REFERENCES `user_profile`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
