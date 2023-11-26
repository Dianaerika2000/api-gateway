import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { InventoryMicroserviceService } from './inventory-microservice.service';
import { CategoryDto } from './dto/category.dto';
import { ProductDto } from './dto/product.dto';
import { ProductQuantityDto } from './dto/product-quantity.dto';
// import { ProductQuantityArrayDto, ProductQuantityDto } from './dto/product-quantity.dto';

@Controller('inventory-microservice')
export class InventoryMicroserviceController {
  constructor(private readonly inventoryMicroserviceService: InventoryMicroserviceService) {}

  @Get('categories')
  getAllCategories() {
    return this.inventoryMicroserviceService.getAllCategories();
  }

  @Get('categories/:id')
  getCategoryById(@Param('id') id: string) {
    return this.inventoryMicroserviceService.getCategoryById(id);
  }

  @Post('categories')
  createCategory(@Body() category: CategoryDto) {
    return this.inventoryMicroserviceService.createCategory(category);
  }

  @Put('categories/:id')
  updateCategory(@Param('id') id: string, @Body() category: CategoryDto) {
    return this.inventoryMicroserviceService.updateCategory(id, category);
  }

  @Delete('categories/:id')
  deleteCategory(@Param('id') id: string) {
    return this.inventoryMicroserviceService.deleteCategory(id);
  }

  @Get('products')
  getAllProducts() {
    return this.inventoryMicroserviceService.getAllProducts();
  }

  @Get('products/:id')
  getProductById(@Param('id') id: string) {
    return this.inventoryMicroserviceService.getProductById(id);
  }

  @Post('products')
  createProduct(@Body() product: ProductDto) {
    return this.inventoryMicroserviceService.createProduct(product);
  }

  @Put('products/:id')
  updateProduct(@Param('id') id: string, @Body() product: ProductDto) {
    return this.inventoryMicroserviceService.updateProduct(id, product);
  }

  @Delete('products/:id')
  deleteProduct(@Param('id') id: string) {
    return this.inventoryMicroserviceService.deleteProduct(id);
  }

  @Put('products/:id/stock')
  updateProductStock(@Param('id') id: string, @Body('quantity') quantity : number) {
    return this.inventoryMicroserviceService.updateStock(id, quantity );
  }

  @Put('products/update/stocks')
  updateProductsStocks(@Body('products') products: ProductQuantityDto[]) {
    return this.inventoryMicroserviceService.updateProductsStocks(products);
  }
}
