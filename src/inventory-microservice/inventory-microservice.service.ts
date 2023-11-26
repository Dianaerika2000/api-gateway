import { Injectable, HttpException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { CategoryDto } from './dto/category.dto';
import { ProductDto } from './dto/product.dto';
import { ProductQuantityDto } from './dto/product-quantity.dto';
// import { ProductQuantityArrayDto, ProductQuantityDto } from './dto/product-quantity.dto';

@Injectable()
export class InventoryMicroserviceService {
  constructor(
    private readonly configService: ConfigService,
  ) {}

  async getAllCategories() {
    try {
      const categories = await axios.get(`${this.configService.get('INVENTORY_MICROSERVICE_URL')}/categories`);
      
      return categories.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async getCategoryById(id: string) {
    try {
      const category = await axios.get(`${this.configService.get('INVENTORY_MICROSERVICE_URL')}/category/${id}`);
      
      return category.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async createCategory(category: CategoryDto) {
    try {
      const newCategory = await axios.post(`${this.configService.get('INVENTORY_MICROSERVICE_URL')}/category`, category);
      
      return newCategory.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async updateCategory(id: string, category: CategoryDto) {
    try {
      const updatedCategory = await axios.put(`${this.configService.get('INVENTORY_MICROSERVICE_URL')}/category/${id}`, category);
      
      return updatedCategory.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async deleteCategory(id: string) {
    try {
      const deletedCategory = await axios.delete(`${this.configService.get('INVENTORY_MICROSERVICE_URL')}/category/${id}`);
      
      return deletedCategory.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async getAllProducts() {
    try {
      const products = await axios.get(`${this.configService.get('INVENTORY_MICROSERVICE_URL')}/products`);
      
      return products.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async getProductById(id: string) {
    try {
      const product = await axios.get(`${this.configService.get('INVENTORY_MICROSERVICE_URL')}/product/${id}`);
      
      return product.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async createProduct(product: ProductDto) {
    try {
      const newProduct = await axios.post(`${this.configService.get('INVENTORY_MICROSERVICE_URL')}/product`, product);
      
      return newProduct.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async updateProduct(id: string, product: ProductDto) {
    try {
      const updatedProduct = await axios.put(`${this.configService.get('INVENTORY_MICROSERVICE_URL')}/product/${id}`, product);
      
      return updatedProduct.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async deleteProduct(id: string) {
    try {
      const deletedProduct = await axios.delete(`${this.configService.get('INVENTORY_MICROSERVICE_URL')}/product/${id}`);
      
      return deletedProduct.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async updateStock(id: string, quantity: number) {
    try {
      const updatedStock = await axios.put(
        `${this.configService.get('INVENTORY_MICROSERVICE_URL')}/products/${id}/stock`,
        quantity,
        { headers: { 'Content-Type': 'application/json' } }
      );
      
      return updatedStock.data;
    } catch (error) {
      console.error(error);
      throw new HttpException(error.response?.data, error.response?.status); 
    }
  }
  
  

  async updateProductsStocks(products: ProductQuantityDto[]) {
    try {
      const updatedStocks = await axios.put(`${this.configService.get('INVENTORY_MICROSERVICE_URL')}/products/update-stocks`, products );
      
      return updatedStocks.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }
}
