-- DropIndex
DROP INDEX `Bar_userId_fkey` ON `bar`;

-- DropIndex
DROP INDEX `Comanda_mesaId_fkey` ON `comanda`;

-- DropIndex
DROP INDEX `Comanda_productoId_fkey` ON `comanda`;

-- DropIndex
DROP INDEX `Mesa_barId_fkey` ON `mesa`;

-- DropIndex
DROP INDEX `Producto_barId_fkey` ON `producto`;

-- AddForeignKey
ALTER TABLE `Bar` ADD CONSTRAINT `Bar_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Producto` ADD CONSTRAINT `Producto_barId_fkey` FOREIGN KEY (`barId`) REFERENCES `Bar`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mesa` ADD CONSTRAINT `Mesa_barId_fkey` FOREIGN KEY (`barId`) REFERENCES `Bar`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comanda` ADD CONSTRAINT `Comanda_productoId_fkey` FOREIGN KEY (`productoId`) REFERENCES `Producto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comanda` ADD CONSTRAINT `Comanda_mesaId_fkey` FOREIGN KEY (`mesaId`) REFERENCES `Mesa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
