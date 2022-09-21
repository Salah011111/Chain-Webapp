/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-20 15:53:38
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-20 16:15:46
 * @FilePath: \chain\test\ClassToken.test.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { expect } from "chai";
import { ethers } from "hardhat";

describe("ClassToken", function () {
  it("Should have the correct initial supply", async function () {
    const initialSupply = ethers.utils.parseEther('10000.0')
    const ClassToken = await ethers.getContractFactory("ClassToken");
    const token = await ClassToken.deploy(initialSupply);
    await token.deployed();

    expect(await token.totalSupply()).to.equal(initialSupply);
  });
});